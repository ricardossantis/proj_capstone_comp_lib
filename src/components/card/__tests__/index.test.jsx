import React from 'react'
import Card from '../index'
import renderer from 'react-test-renderer'

it('renderer', () => {
  const tree = renderer
    .create(
      <Card
        url='https://static1.comicvine.com/uploads/scale_super/11118/111187046/5126812-geralt_ghoul_slayer_by_frostedflakes62-d9xd93e.jpg'
        title='Geralt Of Rivia'
        subtitle='The Blaviken Butcher'
      />
    )
    .toJSON()

  expect(tree).toMatchSnapshot()
})
