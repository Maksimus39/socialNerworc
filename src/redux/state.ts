let rerenderEntereTree = () => {
    console.log('state  changed')
}

export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: MessagesPageType
}


export type ProfilePageType = {
    posts: PostsType[]
    newPostText: string
}
export type MessagesPageType = {
    messages: PropsMessage[]
    dialogs?: DialogsPropsItem[]
}

export type PostsType = {
    id: number
    message: string
    LikeCounts: number
}
export type DialogsPropsItem = {
    name: string
    id: number
    img: string
}
export type PropsMessage = {
    message: string
    id: number
}


let state: RootStateType = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hi how are you?', LikeCounts: 15},
            {id: 2, message: 'It`s my first post', LikeCounts: 20}
        ],
        newPostText: ''
    },
    dialogsPage: {
        messages: [
            {message: "Привет, семья! Как ваши дела сегодня?", id: 1},
            {message: "Здравствуй, дорогой! Всё хорошо, занимаемся подготовкой к ужину.", id: 2},
            {message: "Привет, всем! Я только что вернулся с тренировки, было классно.", id: 3},
            {message: "Привет, пап! Я заканчиваю домашнее задание, скоро буду свободен.", id: 4},
        ],
        dialogs: [
            {
                name: "Max",
                id: 1,
                img: "https://sun9-2.userapi.com/impf/vEZggWN2_RPReXAxA9qkOBs9gF1u-ZNZjzlJPA/gFmkaE_RS-w.jpg?quality=95&as=32x24,48x36,72x54,108x81,160x120,240x180,360x270,480x360,540x405,640x480,720x540,1080x810,1280x960,1440x1080,2560x1920&sign=88062d62a3518fe3c358257040ed003e&from=bu&u=nBD3AJMohdiJ4mbMtoAwt6hJG3_XAKeyJSS4LcPM5Po&cs=510x382"
            },
            {
                name: "Larisa",
                id: 2,
                img: "https://sun9-22.userapi.com/impf/O60PvCW1qJ4RvxTl7zeXqnnzfi8VXKP7V0OIjw/adq-plplEYs.jpg?quality=95&as=32x43,48x64,72x96,108x144,160x213,240x320,360x480,480x640,540x720,640x853,720x960,1080x1440,1280x1707,1440x1920,1920x2560&sign=1dcc7a770ef2d9794b13886e2e2c3ab8&from=bu&u=77MdHrU_kmHqC276d8zaRPpmtOhBse7Tb_r4gdb-Z78&cs=200x267"
            },
            {
                name: "Andrey",
                id: 3,
                img: "https://sun9-26.userapi.com/impf/0LD9ygMqoa-R2vvDFRO4bbX4C0uu_B9i2KqtGA/Yhqu8DacN9U.jpg?quality=95&as=32x21,48x32,72x48,108x72,160x107,240x160,360x240,480x320,540x360,640x427,720x480,1080x720,1280x853,1440x960,2560x1707&sign=ff62e7485f464b2d0ba69ca769f26039&from=bu&u=wdWcfMdrfAeiTupt3c_-XVMlMZ9i685dNk5gVG-5jc8&cs=510x340"
            },
            {
                name: "Bogdan",
                id: 4,
                img: "https://sun9-45.userapi.com/impf/e_ONGiQCQJztuBTNWZ5oiakqhTd8ynLdAEXSCQ/sOPQfnNHtWk.jpg?quality=95&as=32x21,48x32,72x48,108x72,160x107,240x160,360x240,480x320,540x360,640x427,720x480,1080x720,1280x853,1440x960,2560x1707&sign=5d8771ce78baab6cd096e397da72e745&from=bu&u=mBjp8GTLI65p2YmDLC8NPga9aHDYl3-Qj0FvrD4X260&cs=510x340"
            }
        ],
    }
}

// @ts-ignore
window.state = state

export const addPost = (postText: string) => {
    let newPost = {
        id: 3,
        message: postText,
        LikeCounts: 0
    }
    state.profilePage.posts.push(newPost)
    rerenderEntereTree()
    state.profilePage.newPostText = ''
}

export const updateNewPostText = (newText: string) => {

    state.profilePage.newPostText = newText
    console.log(newText)
    rerenderEntereTree()
}

export const subscribe = (observer: () => void) => {
    rerenderEntereTree = observer
}

export default state