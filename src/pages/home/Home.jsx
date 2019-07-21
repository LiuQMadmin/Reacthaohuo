import React from "react"
import { TabBar } from 'antd-mobile';
import Homepage from "./homepage/Homepage"
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'blueTab',
      hidden: false,
      fullScreen: true,
    };
  }

 

  render() {
    return (
      <div style={this.state.fullScreen ? { position: 'fixed', height: '100%', width: '100%', top: 0 } : { height: 400 }}>
        <TabBar
          unselectedTintColor="#000"
          tintColor="#ff4c39"
          barTintColor="white"
          hidden={this.state.hidden}
        >
          <TabBar.Item
            title="首页"
            key="home"
            icon={<div style={{
              width: '22px',
              height: '22px',
              background: 'url(https://img.alicdn.com/imgextra/i1/2053469401/TB2GCzpnVkoBKNjSZFkXXb4tFXa-2053469401.png) center center /  24px 24px no-repeat' }}
            />
            }
            selectedIcon={<div style={{
              width: '22px',
              height: '22px',
              background: 'url(https://img.alicdn.com/imgextra/i4/2053469401/TB24KbjnZj_B1NjSZFHXXaDWpXa-2053469401.png) center center /  24px 24px no-repeat' }}
            />
            }
            selected={this.state.selectedTab === 'blueTab'}
            badge={0}
            onPress={() => {
              this.setState({
                selectedTab: 'blueTab',
              });
            }}
            data-seed="logId"
          >
            <Homepage></Homepage>
          </TabBar.Item>
          <TabBar.Item
            icon={
              <div style={{
                width: '22px',
                height: '22px',
                background: 'url(https://img.alicdn.com/imgextra/i4/2053469401/TB23GLTn77mBKNjSZFyXXbydFXa-2053469401.png) center center /  24px 24px no-repeat' }}
              />
            }
            selectedIcon={
              <div style={{
                width: '22px',
                height: '22px',
                background: 'url(https://img.alicdn.com/imgextra/i4/2053469401/TB2kBbrn_qWBKNjSZFAXXanSpXa-2053469401.png) center center /  24px 24px no-repeat' }}
              />
            }
            title="9.9包邮"
            key="shipping"
            // 这个可以显示数量
            badge={0}
            selected={this.state.selectedTab === 'redTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'redTab',
              });
            }}
            data-seed="logId1"
          >
            <div>发现</div>
          </TabBar.Item>
          <TabBar.Item
            icon={
              <div style={{
                width: '22px',
                height: '22px',
                background: 'url(https://img.alicdn.com/imgextra/i2/2053469401/TB2nLTXn7omBKNjSZFqXXXtqVXa-2053469401.png) center center /  24px 24px no-repeat' }}
              />
            }
            selectedIcon={
              <div style={{
                width: '22px',
                height: '22px',
                background: 'url(https://img.alicdn.com/imgextra/i1/2053469401/TB2y4_qnVkoBKNjSZFkXXb4tFXa-2053469401.png) center center /  24px 24px no-repeat' }}
              />
            }
            title="分类"
            key="Friend"
            // dot
            selected={this.state.selectedTab === 'greenTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'greenTab',
              });
            }}
          >
            <div>实话</div>
          </TabBar.Item>
          <TabBar.Item
            icon={
              <div style={{
                width: '22px',
                height: '22px',
                background: 'url(https://img.alicdn.com/imgextra/i1/2053469401/TB26bEfnQZmBKNjSZPiXXXFNVXa-2053469401.png) center center /  24px 24px no-repeat' }}
              />
            }
            selectedIcon={
              <div style={{
                width: '22px',
                height: '22px',
                background: 'url(https://img.alicdn.com/imgextra/i2/2053469401/TB2b3cKnL6TBKNjSZJiXXbKVFXa-2053469401.png) center center /  24px 24px no-repeat' }}
              />
            }
            title="收藏"
            key="collection"
            // dot
            selected={this.state.selectedTab === 'collection'}
            onPress={() => {
              this.setState({
                selectedTab: 'collection',
              });
            }}
          >
          
            <div>wode</div>
          </TabBar.Item>
          <TabBar.Item
            icon={
              <div style={{
                width: '22px',
                height: '22px',
                background: 'url(https://img.alicdn.com/imgextra/i3/2053469401/TB2WXrhqFkoBKNjSZFkXXb4tFXa-2053469401.png) center center /  24px 24px no-repeat' }}
              />
            }
            selectedIcon={
              <div style={{
                width: '22px',
                height: '22px',
                background: 'url(https://img.alicdn.com/imgextra/i2/2053469401/TB21aHkqRsmBKNjSZFFXXcT9VXa-2053469401.png) center center /  24px 24px no-repeat' }}
              />
            }
            title="我的"
            key="My"
            // dot
            selected={this.state.selectedTab === 'My'}
            onPress={() => {
              this.setState({
                selectedTab: 'My',
              });
            }}
          >
          
            <div>wode</div>
          </TabBar.Item>
        </TabBar>
      </div>
    );
  }
}

export default Home