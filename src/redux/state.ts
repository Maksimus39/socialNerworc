export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: MessagesPageType
}


export type ProfilePageType = {
    posts: PostsType[]
    dialogs?: DialogsPropsItem[]
}
export type MessagesPageType = {
    messages: PropsMessage[]
}

export type PostsType = {
    id: number
    message: string
    LikeCounts: string
}
export type DialogsPropsItem = {
    name: string
    id: number
}
export type PropsMessage = {
    message: string
    id: number
}


let state: RootStateType = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hi how are you?', LikeCounts: '15'},
            {id: 2, message: 'It`s my first post', LikeCounts: '20'}
        ],
        dialogs: [
            {name: "Max", id: 1},
            {name: "Larisa", id: 2},
            {name: "Andrey", id: 3},
            {name: "Bogdan", id: 4}
        ],
    },
    dialogsPage: {
        messages: [
            {message: "Привет, семья! Как ваши дела сегодня?", id: 1},
            {message: "Здравствуй, дорогой! Всё хорошо, занимаемся подготовкой к ужину.", id: 2},
            {message: "Привет, всем! Я только что вернулся с тренировки, было классно.", id: 3},
            {message: "Привет, пап! Я заканчиваю домашнее задание, скоро буду свободен.", id: 4},
        ]
    }

}

export default state