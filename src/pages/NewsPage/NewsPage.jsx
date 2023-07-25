import NewsList from './NewsList/NewsList';
import allArticles from '../../temp/allArticles.json';
import SearchForm from './SearchForm/SearchForm';
import { Title } from './NewsPage.styled';
import { Component } from 'react';

class NewsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShowBtn: false,
      inputValue: '',
    }
    this.showBtnClose = this.showBtnClose.bind(this);
    this.clearInput = this.clearInput.bind(this);
  }

  clearInput(){
    this.setState({isShowBtn: false, inputValue: ''})
  }

  showBtnClose(e) {
    let inputText = e.currentTarget.value;

    if (inputText) {
      this.setState({isShowBtn: true, inputValue: inputText})
    } else {
      this.setState({isShowBtn: false, inputValue: ''})
    }
  }

  render() {
    return (
      <>
        <Title>News</Title>
        <SearchForm 
          isShowBtn={this.state.isShowBtn}
          showBtnClose={this.showBtnClose}
          clearInput={this.clearInput}
          inputValue={this.state.inputValue}
        />
        <NewsList allArticles={allArticles.article} />
      </>
    )
  }
  }

export default NewsPage;
