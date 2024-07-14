import React, {Component} from 'react'
import {
  MainContainer,
  SubCont,
  Heading,
  InputStyle,
  Form,
  SelectOpt,
  ButtonOpt,
  ImageDiv,
} from './styledComponents.js'

const fontSizesOptionsList = [
  {optionId: '8', displayText: '8'},
  {optionId: '12', displayText: '12'},
  {optionId: '16', displayText: '16'},
  {optionId: '20', displayText: '20'},
  {optionId: '24', displayText: '24'},
  {optionId: '28', displayText: '28'},
  {optionId: '32', displayText: '32'},
]

class MemeGenerator extends Component {
  state = {opposite: false, imageUrl: '', topText: '', bottomText: '', opts: ''}

  UrlTyping = event => {
    this.setState({
      imageUrl: event.target.value,
    })
  }

  toptext = event => {
    this.setState({
      topText: event.target.value,
    })
  }

  bottomtext = event => {
    this.setState({
      bottomText: event.target.value,
    })
  }

  selecting = event => {
    this.setState({
      opts: event.target.value,
    })
  }

  submmitingForm = event => {
    event.preventDefault()
    this.setState({
      opposite: true,
    })
  }

  render() {
    const {opposite, imageUrl, topText, bottomText, opts} = this.state
    return (
      <MainContainer className="main">
        <SubCont>
          <Heading>Meme Generator</Heading>
          <Form onSubmit={this.submmitingForm}>
            <label htmlFor="img">Image URL</label>
            <InputStyle
              id="img"
              value={imageUrl}
              onChange={this.UrlTyping}
              type="text"
              value={imageUrl}
            />
            <label htmlFor="top">Top Text</label>
            <InputStyle
              id="top"
              value={topText}
              onChange={this.toptext}
              type="text"
              value={topText}
            />
            <label htmlFor="bottom">Bottom Text</label>
            <InputStyle
              id="bottom"
              value={bottomText}
              onChange={this.bottomtext}
              type="text"
              value={bottomText}
            />
            <label htmlFor="sl">Font Size</label>
            <SelectOpt
              id="sl"
              value={opts}
              onChange={this.selecting}
              value={opts}
            >
              {fontSizesOptionsList.map(eachItem => (
                <option key={eachItem.optionId} value={eachItem.optionId}>
                  {eachItem.displayText}
                </option>
              ))}
            </SelectOpt>
            <ButtonOpt type="submit">Generate</ButtonOpt>
          </Form>
        </SubCont>
        {opposite && imageUrl && (
          <ImageDiv data-testid="meme" bgImage={imageUrl} size={opts}>
            {topText && <p>{topText}</p>}
            {bottomText && <p>{bottomText}</p>}
          </ImageDiv>
        )}
      </MainContainer>
    )
  }
}

export default MemeGenerator
