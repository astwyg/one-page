import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import {AvgGrid, Button, Dropdown, ModalTrigger, Modal} from 'amazeui-react';

import DatePage from './date.jsx';

const styles = {
  mainBlock:{
    padding:"20px 50px 0 50px",
  },
  title:{
    padding:"40px 50px 0 50px",
    textAlign:"center",
  }
}


const modalPay = <Modal title="向我付款"><div><p>左边支付宝, 右边微信, 请先加好友再转账.</p><img src="/images/alipay.png" width="50%" /><img src="/images/wechat.jpg" width="50%" /></div></Modal>;

const HomePage = () => (<div>
  <div style={styles.title}>
    <h5 style={{marginBottom:0}}>[Y'ong   G'ang]</h5>
    <h1 style={{fontSize:"2.5em", marginBottom:0, marginTop:0}}>YS GH</h1>
    <small style={{color:"gray"}}>骄傲的使用自然码</small>
  </div>
  <AvgGrid sm={1} md={3} lg={3} className="am-thumbnails" style={styles.mainBlock}>
    <li>
      <Button amStyle="primary" block onClick={()=>window.open("http://note.ysgh.net/blog/5a7ff2e465d4403dbe000001")}>笔记本</Button>
    </li>
    <li><Button amStyle="default" block onClick={()=>window.open("/archives/2")}>旧博客</Button></li>
    <li><ModalTrigger modal={modalPay}><Button amStyle="secondary" block>向我付款</Button></ModalTrigger></li>
    <li><Button amStyle="success" block onClick={()=>window.open("/date")}>查看日程</Button></li>
    <li>
      <Dropdown title="链接" btnStyle="warning" toggleClassName="am-btn-block" className="am-btn-block">
        <Dropdown.Item onClick={()=>window.open("http://www.6vdata.com/")}>六维数据</Dropdown.Item>
        <Dropdown.Item onClick={()=>window.open("http://zhijiexia.vipsinaapp.com/")}>微信站点</Dropdown.Item>
      </Dropdown>
    </li>
    <li>
      <Dropdown title="社交网站" btnStyle="danger" toggleClassName="am-btn-block" className="am-btn-block">
        <Dropdown.Item onClick={()=>window.open("https://github.com/astwyg")}>github</Dropdown.Item>
        <Dropdown.Item onClick={()=>window.open("http://weibo.com/p/1005052633534325")}>微博</Dropdown.Item>
      </Dropdown>
    </li>
  </AvgGrid>
</div>);

const Pages = (
  <Router>
    <div>
      <Route exact path="/" component={HomePage}/>
      <Route path="/date" component={DatePage}/>
    </div>
  </Router>
);

ReactDOM.render(Pages, document.getElementById('page'));