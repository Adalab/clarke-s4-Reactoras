import React from 'react';


class SectionCV extends Component {
  render() {
    return (
      <section className="section-cv">
        <h3>{this.props.titleSectionCV}</h3>
        <hr className="red-line" />
        <div className="box-cv">
          <ul className={this.props.classListCV}>
            <li>
              <h4>{this.props.titleSectionCV}</h4>
            </li>
          </ul>
        </div>
      </section>

    );
  }
}









export default App;
