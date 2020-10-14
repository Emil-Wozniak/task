import React from 'react';
import '../../styles/carousel.less';
import { CarouselItem } from '../../entities/languages/language';
import { Counter } from '../utils/counter';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowAltCircleLeft,
  faArrowAltCircleRight,
} from '@fortawesome/free-solid-svg-icons';

type CarouselState = {
  current: number;
};
type CarouselProps = {
  title: string;
  items: Array<CarouselItem>;
};

class Carousel extends React.Component<CarouselProps, CarouselState> {
  constructor(props: CarouselProps) {
    super(props);
    this.state = { current: 0 };
  }

  onNextClick = () => {
    const { current } = this.state;
    const length = this.props.items.length;
    if (current < length - 1) {
      const count = this.state.current + 1;
      this.setState({ current: count });
    } else {
      this.setState({ current: 0 });
    }
  };

  onPreviousClick = () => {
    const { current } = this.state;
    const length = this.props.items.length;
    if (current > 0) {
      this.setState({ current: current - 1 });
    } else {
      this.setState({ current: length - 1 });
    }
  };

  render() {
    const { title, items } = this.props;
    return (
      <section className="carousel">
        <div className="container">
          <h2 style={{ textAlign: 'center' }}>{title}</h2>
          <Counter interval={2_000} current={this.state.current}>
            {items.map((item, i) => (
              <div className="item" key={`item-${item.title}-${i}`}>
                <i className={`icon ${item.src}`} />
              </div>
            ))}
          </Counter>
          <button className="next btn" onClick={this.onNextClick}>
            <FontAwesomeIcon icon={faArrowAltCircleRight} size="2x" />
          </button>
          <button className="past btn" onClick={this.onPreviousClick}>
            <FontAwesomeIcon icon={faArrowAltCircleLeft} size="2x" />
          </button>
        </div>
      </section>
    );
  }
}

export default Carousel;
