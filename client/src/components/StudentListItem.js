import React from "react";
import { Sidebar, Segment, Header, Menu, Icon } from "semantic-ui-react";

class StudentListItem extends React.Component {
  state = { clicked: false };

  handleItemClick = () => {
    this.setState(prevState => ({ clicked: !prevState.clicked }));
  };

  // pass through _id and edit
  handleEditClick = name => {
    console.log(`editing ${name}`);
  };

  // pass through _id and confirm delete
  handleDeleteClick = (name, _id) => {
    console.log(`deleting ${name}, id: ${_id}`);
  };

  render = () => {
    const { _id, name } = this.props;
    return (
      <Sidebar.Pushable as={Segment}>
        <Sidebar
          as={Menu}
          animation="uncover"
          visible={this.state.clicked}
          inverted
          size="large"
          width="thin"
        >
          <Menu.Item>
            <Icon
              name="delete"
              color="red"
              onClick={() => this.handleDeleteClick(name, _id)}
            />
          </Menu.Item>
          <Menu.Item>
            <Icon name="edit" onClick={() => this.handleEditClick(name)} />
          </Menu.Item>
        </Sidebar>
        <Sidebar.Pusher>
          <Header
            as="h4"
            icon="user outline"
            content={name}
            attached="top"
            onClick={this.handleItemClick}
          />
        </Sidebar.Pusher>
      </Sidebar.Pushable>
    );
  };
}

export default StudentListItem;
