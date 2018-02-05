import React from 'react';
import { Button, List } from 'antd-mobile'

class App extends React.Component {
  render() {
    return (
      <div>
        <Button type='warning'>确定</Button>
        <List renderHeader={()=>'列表'}>
          <List.Item>1</List.Item>
          <List.Item>2</List.Item>
        </List>
      </div>
    );
  }
}

export default App;
