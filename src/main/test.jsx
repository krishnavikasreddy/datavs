import React from 'react';
import Transition from 'react-inline-transition-group';

export default class TodoList extends React.Component {
  constructor() {
    super();
    this.state = { count: 1, style: {} };
  }

  onMouseOver = () => {
    this.setState({ style: { background: '#777' } });
  }

  onMouseLeave = () => {
    this.setState({ style: { background: '#000' } });
  }

  render() {
    const styles = {
      container: {
        width: '500px',
      },

      base: {
        width: '100%',
        height: '50px',
        background: '#4CAF50',
        opacity: 0,
      },

      appear: {
        opacity: 1,
        transition: 'all 500ms',
      },

      leave: {
        opacity: 0,
        transition: 'all 250ms',
      },

      custom: {
        background: '#3F51B5',
      },
    };

    return (
      <div>
        <Transition
          childrenStyles={{
            base: styles.base,
            appear: styles.appear,
            enter: styles.appear,
            leave: styles.leave,
          }}
          onPhaseEnd={this.handlePhaseEnd}
          style={styles.container}
        >
          <div
            onMouseOver={this.onMouseOver}
            onMouseLeave={this.onMouseLeave}
            style={this.state.style}
          >
            hello world
          </div>
        </Transition>
      </div>
    );
  }
}
