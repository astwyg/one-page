import React from 'react';
import ReactDOM from 'react-dom';
import {AvgGrid, Button, Dropdown, ModalTrigger, Modal} from 'amazeui-react';

const styles = {
  mainBlock:{
    padding:"200px 50px 0 50px",
  }
}

const modalInfo = <Modal title="还没搞过来">旧的WorldPress站点正在搬移中.</Modal>;
const modalPay = <Modal title="向我付款"><div><p>左边支付宝, 右边微信, 请先加好友再转账.</p><img src="/images/alipay.png" width="50%" /><img src="/images/wechat.jpg" width="50%" /></div></Modal>;

const ThisPage = (
  <AvgGrid sm={1} md={3} lg={3} className="am-thumbnails" style={styles.mainBlock}>
    <li>
      <Button amStyle="primary" block onClick={()=>window.open("http://blog.leanote.com/astwyg@outlook.com")}>笔记本</Button>
    </li>
    <li><ModalTrigger modal={modalInfo}><Button amStyle="default" block>旧博客</Button></ModalTrigger></li>
    <li><ModalTrigger modal={modalPay}><Button amStyle="secondary" block>向我付款</Button></ModalTrigger></li>
    <li><Button amStyle="success" block onClick={()=>window.open("https://outlook.live.com/owa//calendar/8d120968-ff3c-488e-a036-2d0056de74cb/8888d70a-7b67-4096-9ed9-a1d732e362e4/cid-820FF0510D3252E0/index.html")}>查看日程</Button></li>
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
);

ReactDOM.render(ThisPage, document.getElementById('page'));