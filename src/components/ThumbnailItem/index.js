import './index.css'

const ThumbnailItem = props => {
  const {thumbnailDetails, changeImage, isSelected} = props
  const {id, thumbnailUrl, thumbnailAltText} = thumbnailDetails
  const changeImageOnClick = () => {
    changeImage(id)
  }
  const selectedThumbnail = isSelected ? 'selected' : ''
  return (
    <li>
      <button onClick={changeImageOnClick} type="button">
        <img
          className={`${selectedThumbnail}`}
          src={thumbnailUrl}
          alt={thumbnailAltText}
        />
      </button>
    </li>
  )
}
export default ThumbnailItem
