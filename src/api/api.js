import {
    wxRequest
  } from '../util/wxRequest';
  
  let env = "-test" //-dev 或者 -test
  const apiMall = 'https://m.tdamm.com'
  
  //登录
  const UserLogin = (params) => wxRequest(params, apiMall + '/weapp/member/login');
  
  //添加我的烦恼
  const Pay = (params) => wxRequest(params, apiMall + '/weapp/api/trouble/pay');
  //获取我的烦恼分享图片数据
  const Share = (params) => wxRequest(params, apiMall + '/weapp/api/trouble/share');
  //获取我的烦恼数据
  const Show = (params) => wxRequest(params, apiMall + '/weapp/api/trouble/show');
  //获取用户回答数据（根据烦恼ID）
  const GetSolutions = (params) => wxRequest(params, apiMall + '/weapp/api/trouble/get_solutions');
  //添加用户解答数据
  const AddSolution = (params) => wxRequest(params, apiMall + '/weapp/api/trouble/add_solution');
  //采纳
  const Adopt = (params) => wxRequest(params, apiMall + '/weapp/api/trouble/adopt');
  //获取我的问题的基本数据（我的记录）
  const UserDataForSend = (params) => wxRequest(params, apiMall + '/weapp/api/trouble/user_data_for_send');
  //获取我的问题中烦恼列表（我的记录）
  const SendRecords = (params) => wxRequest(params, apiMall + '/weapp/api/trouble/send_records');
  //获取我的回复基本数据（我的记录）
  const UserDataForGet = (params) => wxRequest(params, apiMall + '/weapp/api/trouble/user_data_for_get');
  //获取我的回复中答复列表（我的记录）
  const GetRecords = (params) => wxRequest(params, apiMall + '/weapp/api/trouble/get_records');
  //获取我的广场基本数据
  const GetSquareBaseData = (params) => wxRequest(params, apiMall + '/weapp/api/trouble/get_square_base_data');
  //获取我的广场问题列表
  const GetSquareData = (params) => wxRequest(params, apiMall + '/weapp/api/trouble/get_square_data');
  //收集formid
  const SendTempID = (params) => wxRequest(params, apiMall + '/weapp/api/trouble/send_temp_id');
  //提现
  const Withdraw = (params) => wxRequest(params, apiMall + '/weapp/api/trouble/withdraw');
  
  
  module.exports = {
      UserLogin,
      Pay,
      Share,
      Show,
      GetSolutions,
      AddSolution,
      Adopt,
      UserDataForSend,
      SendRecords,
      UserDataForGet,
      GetRecords,
      GetSquareBaseData,
      GetSquareData,
      SendTempID,
      Withdraw,
  }
  