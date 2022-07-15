import Button from 'components/Button'
import * as S from './styles'

import JSConfetti from 'js-confetti'
import { useEffect } from 'react'
import Link from 'next/link'

const Congrats = () => {
  useEffect(() => {
    const jsConfetti = new JSConfetti()

    jsConfetti.addConfetti({
      emojis: ['📚', '📘']
    })

    jsConfetti.addConfetti()
  }, [])

  return (
    <S.Wrapper initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <S.Title>Congratulations</S.Title>

      <S.Quote>
        Education is the passport to the future, for tomorrow belongs to those
        who prepare for it today.
      </S.Quote>

      <S.ButtonWrapper>
        <Button>Share</Button>
        <Link href="/" passHref>
          <Button styleType="outline">Continue</Button>
        </Link>
      </S.ButtonWrapper>
    </S.Wrapper>
  )
}

export default Congrats
