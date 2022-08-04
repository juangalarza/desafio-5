import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import axios from 'axios'

const PokemonCard = ({ name }) => {
  return (
    <li>
      <Link href={`/pokemon/${name}`}>
        <h3>{name}</h3>
      </Link>
    </li>
  )
}

export default PokemonCard