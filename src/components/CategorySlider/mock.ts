import { Asset } from 'generated/graphql'
import { CategorySliderProps } from '.'

export const mock = {
  categories: [
    {
      name: 'Math',
      id: '123',
      image: {
        __typename: 'Asset',
        url: 'https://source.unsplash.com/user/willianjusten/1042x580'
      } as Asset
    },
    {
      name: 'History',
      id: '123',
      image: {
        __typename: 'Asset',
        url: 'https://source.unsplash.com/user/willianjusten/1042x580'
      } as Asset
    }
  ]
} as CategorySliderProps
