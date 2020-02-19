import React, { Component } from 'react';
import Card from './../shared/Card/Card';
import Loading from './../shared/Loading/Loading';
import {connect} from 'react-redux';
import {requestArticles} from '../../redux/mediumReducer'

class Medium extends Component {

  componentDidMount(){
    this.props.requestArticles();
  }

  render() {
    const articles = this.props.articles.map((article => <Card key={article.id} article={article} />))
    return (
      <div className='news-container'>
        <img src="./mediumLogo.png" style={styles.logo} alt="" />
        {this.props.loading ? <Loading /> : <div>{articles}</div>}
      </div>
    )
  }
}

const mapStateToProps = (state) => state.medium

const mapDispatchToProps = {
  requestArticles
}

export default connect(mapStateToProps, mapDispatchToProps)(Medium);

const styles = {
  logo: { width: '250px' }
}