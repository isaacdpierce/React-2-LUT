import React, { Component } from 'react';
import styled from 'styled-components';
import { Gesture } from 'react-with-gesture';
import { Spring, animated, interpolate } from 'react-spring';
import { Card } from 'Elements';

const AnimCard = Card.withComponent(animated.div);

const DragCard = AnimCard.extend`
  background-color: #333;
  height: 300px;
  position: absolute;
  top: 0;
`;

const CardContainer = styled(animated.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 330px;
  height: 330px;
  margin: 0 auto;
  border-radius: 5px;
`;

export default class Drag extends Component {
  onUp = xDelta => () => {
    if (xDelta < -300) {
      // alert('remove card');
    } else if (xDelta < 300) {
      // alert('accept card');
    }
  };
  render() {
    return (
      <Gesture>
        {({ down, xDelta }) => (
          <Spring
            native
            to={{
              x: down ? xDelta : 0
            }}
            immediate={name => down && name === 'x'}
          >
            {({ x }) => (
              <CardContainer
                style={{
                  background: x.interpolate({
                    range: [-300, 300],
                    output: ['#36273F', '#006666'],
                    extrapolate: 'clamp'
                  })
                }}
              >
                <h1>Peek-a-boo</h1>
                <DragCard
                  onMouseUp={this.onUp(xDelta)}
                  style={{
                    opacity: x.interpolate({
                      range: [-300, -100],
                      output: [0, 1],
                      extrapolate: 'clamp'
                    }),
                    transform: interpolate(
                      [
                        x,
                        x.interpolate({
                          range: [-300, 300],
                          output: [-45, 45],
                          extrapolate: 'clamp'
                        })
                      ],
                      (x, rotate) => `translateX(${x}px) rotate(${rotate}deg)`
                    )
                  }}
                />
              </CardContainer>
            )}
          </Spring>
        )}
      </Gesture>
    );
  }
}
