import Component from 'react';
import React from 'react';

export default class ImageUpload extends React.Component {
  constructor(props) {
    super(props)
    this.state = {file: '',imagePreviewUrl: ''}
    this.upload = this.upload.bind(this)
    this.imageChange = this.imageChange.bind(this)
  }

  upload(e) {
    e.preventDefault()
    console.log('temp file object '+this.state.file)
  }

  imageChange(e) {
    e.preventDefault()
    let reader = new FileReader()
    let file = e.target.files[0]
    reader.onloadend = () => {
      this.setState({
        file: file,
        imagePreviewUrl: reader.result
      })
    }
    reader.readAsDataURL(file)
  }
  render() {
    let {imagePreviewUrl} = this.state;
    let $imagePreview = null;
    if (imagePreviewUrl) {
      $imagePreview = (<img src={imagePreviewUrl} />);
    } else {
      $imagePreview = (<div className="previewText">Please select an Image for Preview</div>);
    }

    return (
      <div className="previewComponent">
        <form onSubmit={(e)=>this.upload(e)}>
          <input className="fileInput"
            type="file"
            onChange={(e)=>this.imageChange(e)} />
          <button className="submitButton"
            type="submit"
            onClick={(e)=>this.upload(e)}>Upload Image</button>
        </form>
        <div className="imgPreview">
          {$imagePreview}
        </div>
      </div>
    )
  }
}
