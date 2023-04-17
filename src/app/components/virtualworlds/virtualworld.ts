export interface VirtualWorld {
  _id: number,
  name: string,
  owner: {
    name: string,
    picture: string
  },
  thumb: string,
  hashtag: Array<string>,
  environment: string,
  createdAt: Date
}
