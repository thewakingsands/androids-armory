import React from 'react'
import { CrossFadeTile } from '../../components/cross-fade-tile'
import classnames from 'classnames'

export function HomePageTilesRow({
  className,
  tiles,
}: {
  className?: string | Record<string, boolean>
  tiles: Array<React.ComponentProps<typeof CrossFadeTile> & { _key: React.Key }>
}) {
  return (
    <div className={classnames('flex flex-wrap justify-center gap-4 px-4 overflow-hidden', className)}>
      {tiles.map((tile) => (
        <div className="flex-1 max-w-44 flex justify-center even:mt-8" key={tile._key}>
          <CrossFadeTile {...tile} />
        </div>
      ))}
    </div>
  )
}
