import Taro, { Component, Config, base64ToArrayBuffer } from '@tarojs/taro';
import { View, Image, Text, Button } from '@tarojs/components';
import {
  AtButton,
  AtCurtain,
  AtForm,
  AtInput,
  AtModal,
  AtModalContent,
  AtModalAction,
} from 'taro-ui';
import { login, editStudet } from '../../api/api';

import './index.less';
import 'taro-ui/dist/style/components/button.scss';
import 'taro-ui/dist/style/components/loading.scss';
import 'taro-ui/dist/style/components/curtain.scss';
import 'taro-ui/dist/style/components/form.scss';
import 'taro-ui/dist/style/components/input.scss';
import 'taro-ui/dist/style/components/modal.scss';

type stateType = {
  shouquanBox: boolean;
  infoShow: boolean;
};
export default class Index extends Component {
  isLogin = false;
  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  state: stateType;
  constructor(props) {
    super(props);
    this.state = {
      shouquanBox: false,
      infoShow: false,
    };
  }
  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
  config: Config = {
    navigationBarTitleText: '学商系统',
  };
  getUserInfo(res) {
    if (res.detail.userInfo) {
      Taro.setStorageSync('shouquan', JSON.stringify(true));
      this.setState({
        shouquanBox: false,
      });
      const { userInfo } = res.detail;
      Taro.setStorageSync('userInfo', JSON.stringify(userInfo));
      login().then((res) => {
        Taro.setStorageSync('isLogin', JSON.stringify(true));
        // const userInfo = JSON.parse(Taro.getStorageSync('userInfo'));
      });
    }
  }
  // 跳转测试页面
  goTest() {
    const shouquan = JSON.parse(Taro.getStorageSync('shouquan'));
    const isLogin = JSON.parse(Taro.getStorageSync('isLogin'));
    if (shouquan == false) {
      this.setState({
        shouquanBox: true,
      });
      return false;
    }
    if (isLogin == true) {
      const userInfo = JSON.parse(Taro.getStorageSync('userInfo'));
      if (userInfo.student_name == undefined || userInfo.student_name == '') {
        this.setState({
          infoShow: true,
        });
      } else {
        Taro.navigateTo({
          url: '/pages/question/index',
        });
      }
    } else {
      login().then((res) => {
        Taro.setStorageSync('isLogin', JSON.stringify(true));
        const userInfo = JSON.parse(Taro.getStorageSync('userInfo'));
        if (userInfo.student_name == undefined || userInfo.student_name == '') {
          this.setState({
            infoShow: true,
          });
        } else {
          Taro.navigateTo({
            url: '/pages/question/index',
          });
        }
      });
    }
  }
  goResult() {
    const userInfo = JSON.parse(Taro.getStorageSync('userInfo'));
    Taro.navigateTo({
      url: '/pages/analysis/index',
    });
  }
  onClose() {
    this.setState({
      infoShow: false,
    });
  }
  onSubmit() {
    if (this.studentInfo.name.trim() == '') {
      Taro.showToast({
        title: '学生姓名不能为空',
        icon: 'none',
        duration: 1000,
      });
      return false;
    }
    if (this.studentInfo.school.trim() == '') {
      Taro.showToast({
        title: '学校不能为空',
        icon: 'none',
        duration: 1000,
      });
      return false;
    }

    if (this.studentInfo.grade.trim() == '') {
      Taro.showToast({
        title: '年级不能为空',
        icon: 'none',
        duration: 1000,
      });
      return false;
    }
    if (this.studentInfo.tel == '') {
      Taro.showToast({
        title: '家长电话不能为空',
        icon: 'none',
        duration: 1000,
      });
      return false;
    } else {
      var regPhones = /^(\d{3,4}\-\d{3,8}$)|(\d{3}\-\d{4}\-\d{3}$)|(^\d{7}$)|(^\d{8}$)|(^\d{11}$)|(^\d{12}$)|(^1\d{10}$)/; //手机号和座机正则
      if (!regPhones.test(this.studentInfo.tel)) {
        Taro.showToast({
          title: '请输入正确的家长联系方式',
          icon: 'none',
          duration: 1000,
        });
        return false;
      }
    }

    let params = {
      parent_phone: this.studentInfo.tel.trim(),
      school_name: this.studentInfo.school.trim(),
      student_name: this.studentInfo.name.trim(),
      grade: this.studentInfo.grade.trim(),
    };
    editStudet(params).then((res) => {
      if (res.data.err_code == 0) {
        this.onClose();
      }
    });
  }
  studentInfo = {
    name: '',
    school: '',
    grade: '',
    tel: '',
  };
  onChange(field, val) {
    this.studentInfo[field] = val;
    if (field == 'tel') {
      this.studentInfo[field] = val.replace(/\D/g, '');
      return val.replace(/\D/g, '');
    }
    return val;
  }

  render() {
    return (
      <View>
        <View className="index">
          <View className="icon">
            <Image src="../../assets/images/shijiashi.jpg" />
          </View>
          <View className="introduce">
            <View className="title">
              <Text>拾加拾教育：学商测试</Text>
            </View>
            <View className="content">
              <Text>测试内容：考察学生各方面能力</Text>
            </View>
            <View className="content">
              <Text>测试时间：不限</Text>
            </View>
            <View className="content">
              <Text>提交条件：题目全部完成后方可提交</Text>
            </View>
            <View className="content">
              <Text>测试形式：自主测试</Text>
            </View>
          </View>
        </View>
        <View className="button">
          <Button className="btn" onClick={this.goTest.bind(this)}>
            开始测试
          </Button>
          <Button className="btn" onClick={this.goResult.bind(this)}>
            查看结果
          </Button>
        </View>
        <AtModal isOpened={this.state.shouquanBox}>
          <AtModalContent>
            <View className="tishi-img">
              <Image src="../../assets/images/shijiashi.jpg" />
            </View>
            <View className="quanxian-content">学商测试申请获得以下权限：</View>
            <View className="quanxian">获得你的公开信息(昵称、头像等)</View>
          </AtModalContent>
          <AtModalAction>
            <Button
              className="btn"
              openType="getUserInfo"
              onGetUserInfo={this.getUserInfo}
            >
              微信授权
            </Button>
          </AtModalAction>
        </AtModal>
        <AtCurtain
          isOpened={this.state.infoShow}
          onClose={this.onClose.bind(this)}
        >
          <View className="tishi">
            <AtForm onSubmit={this.onSubmit.bind(this)}>
              <AtInput
                name="value"
                title="学生姓名:"
                type="text"
                placeholder="请输入学生姓名"
                value={this.studentInfo.name}
                onChange={this.onChange.bind(this, 'name')}
              />
              <AtInput
                name="value"
                title="学　　校:"
                type="text"
                placeholder="请输入就读学校"
                value={this.studentInfo.school}
                onChange={this.onChange.bind(this, 'school')}
              />
              <AtInput
                name="value"
                title="年　　级:"
                type="text"
                placeholder="请输入就读年级"
                value={this.studentInfo.grade}
                onChange={this.onChange.bind(this, 'grade')}
              />
              <AtInput
                name="value"
                title="家长电话:"
                type="phone"
                placeholder="请输入家长电话"
                value={this.studentInfo.tel}
                onChange={this.onChange.bind(this, 'tel')}
              />
              <View className="btn-sub">
                <AtButton formType="submit" className="btn">
                  保存
                </AtButton>
              </View>
            </AtForm>
          </View>
        </AtCurtain>
      </View>
    );
  }
}
