import { useCallback, useMemo, useState } from 'react'
import type { Product } from '../data/products'

export interface CartLine {
  product: Product
  qty: number
}

const QTY_MAX = 99

/**
 * Carrinho simples, em memória.
 * Não há checkout nem pagamento online: o pedido é fechado pelo WhatsApp.
 * Nenhum dado do usuário é armazenado ou enviado a terceiros.
 */
export function useCart() {
  const [lines, setLines] = useState<CartLine[]>([])

  const add = useCallback((product: Product, qty = 1) => {
    if (!product.available) return
    setLines((prev) => {
      const i = prev.findIndex((l) => l.product.id === product.id)
      if (i === -1) return [...prev, { product, qty: Math.min(qty, QTY_MAX) }]
      const next = [...prev]
      next[i] = { ...next[i], qty: Math.min(next[i].qty + qty, QTY_MAX) }
      return next
    })
  }, [])

  const remove = useCallback((id: string) => {
    setLines((prev) => prev.filter((l) => l.product.id !== id))
  }, [])

  /** Quantidade 0 (ou menos) remove o item do carrinho. */
  const setQty = useCallback((id: string, qty: number) => {
    setLines((prev) =>
      qty <= 0
        ? prev.filter((l) => l.product.id !== id)
        : prev.map((l) => (l.product.id === id ? { ...l, qty: Math.min(qty, QTY_MAX) } : l)),
    )
  }, [])

  const clear = useCallback(() => setLines([]), [])

  const count = useMemo(() => lines.reduce((n, l) => n + l.qty, 0), [lines])

  /** Soma apenas os itens com preço cadastrado. */
  const subtotal = useMemo(
    () => lines.reduce((soma, l) => soma + (l.product.price ?? 0) * l.qty, 0),
    [lines],
  )

  /** Há itens sem preço? Então o subtotal é parcial. */
  const hasUnpriced = useMemo(() => lines.some((l) => l.product.price === null), [lines])

  const has = useCallback((id: string) => lines.some((l) => l.product.id === id), [lines])

  return { lines, add, remove, setQty, clear, count, subtotal, hasUnpriced, has }
}

export type CartApi = ReturnType<typeof useCart>
