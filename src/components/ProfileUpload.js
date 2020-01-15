import React from 'react'
import { Upload, message, Button, Icon } from 'antd'

const props = {
    name: 'file',
    action: '#',
    headers: {
        authorization: 'authorization-text',
    },
    onChange(info) {
        if (info.file.status !== 'uploading') {
            console.log(info.file, info.fileList)
        }
        if (info.file.status === 'done') {
            message.success(`${info.file.name} file was uploaded successfully`)
        } else if (info.file.status === 'error') {
            message.error(`${info.file.name} file upload failed`)
        }
    }
}

const ProfileUpload = () => {
    return (
        <div style={{ textAlign: 'center' }}>
            <div className='settingsHeader' style={{ marginTop: '5px' }}>
                <h3 style={{ textAlign: 'center' }}>Profile Picture</h3>
            </div>
            <div>
                Image shows here
            </div>
            <Upload {...props}>
                <Button>
                    <Icon type='upload' /> Upload Photo
            </Button>
            </Upload>
        </div>
    )
}

export default ProfileUpload