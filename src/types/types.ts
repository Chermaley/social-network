export type PostType = {
    img: string,
    text: string,
    likesCount: number,
    id: number
}
export type ContactsType = {
    github: string,
    vk: string,
    facebook: string
    instagram: string
    twitter: string
    website: string
    youtube: string
    mainLink: string
}
export type PhotosType = {
    small: string | undefined,
    large: string | undefined
}
export type ProfileType = {
    userId: number,
    lookingForAJob: boolean,
    lookingForAJobDescription: boolean,
    fullName: string,
    contacts: ContactsType,
    photos: PhotosType,
    aboutMe: string
}
export type UserType = {
    id: number,
    name: string,
    status: string,
    photos: PhotosType,
    followed: boolean
}