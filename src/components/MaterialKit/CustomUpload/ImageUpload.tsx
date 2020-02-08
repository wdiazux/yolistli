import React, { ChangeEvent } from 'react'

// core components
// import Button from '../CustomButtons/Button'
import Button from '@material-ui/core/Button'

import defaultImage from '../../../assets/images/image_placeholder.jpg'
import defaultAvatar from '../../../assets/images/placeholder.jpg'

interface Props {
    avatar?: boolean
    addButtonProps?: JSX.Element
    changeButtonProps?: JSX.Element
    removeButtonProps?: JSX.Element
}

const ImageUpload: React.FC<Props> = props => {
    const [file, setFile] = React.useState()
    const [imagePreviewUrl, setImagePreviewUrl] = React.useState(
        props.avatar ? defaultAvatar : defaultImage
    )
    const fileInput = React.createRef()
    const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
        e.preventDefault()
        const reader = new FileReader()
        const inputFile: File = (e.target.files as FileList)[0]
        reader.onloadend = () => {
            setFile(inputFile)
            setImagePreviewUrl(reader.result)
        }
        reader.readAsDataURL(inputFile)
    }
    const handleClick = () => {
        fileInput.current.click()
    }
    const handleRemove = () => {
        setFile(null)
        setImagePreviewUrl(props.avatar ? defaultAvatar : defaultImage)
        fileInput.current.value = null
    }
    const {
        avatar,
        addButtonProps,
        changeButtonProps,
        removeButtonProps,
    } = props
    return (
        <div className="fileinput text-center">
            <input type="file" onChange={handleImageChange} ref={fileInput} />
            <div className={'thumbnail' + (avatar ? ' img-circle' : '')}>
                <img src={imagePreviewUrl} alt="..." />
            </div>
            <div>
                {file === null ? (
                    <Button {...addButtonProps} onClick={() => handleClick()}>
                        {avatar ? 'Add Photo' : 'Select image'}
                    </Button>
                ) : (
                    <span>
                        <Button
                            {...changeButtonProps}
                            onClick={() => handleClick()}>
                            Change
                        </Button>
                        {avatar ? <br /> : null}
                        <Button
                            {...removeButtonProps}
                            onClick={() => handleRemove()}>
                            <i className="fas fa-times" /> Remove
                        </Button>
                    </span>
                )}
            </div>
        </div>
    )
}

export default ImageUpload
