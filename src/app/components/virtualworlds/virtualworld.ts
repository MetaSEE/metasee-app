export interface VirtualWorld {
  _id: string,
  name: string,
  owner: {
    name: string,
    picture: string
  },
  thumb: string,
  hashtag: Array<string>,
  environment: string,
  createdAt: string
}
