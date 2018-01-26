import React from 'react';


class ElementListCV extends React.Component {
  render() {
    return (
      <section className="section-cv">
        <h3>{this.props.titleSectionCV}</h3>
        <hr className="red-line" />
        <div className="box-cv">
          <ul className={this.props.classListCV}>
            <li>
              { this.props.children }
            </li>
          </ul>
        </div>
      </section>
    );
  }
}

export default ElementListCV;
