'use client';
import { createContext, useContext, useState, useCallback, useMemo } from 'react';

const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [items, setItems] = useState([]);
  const [open, setOpen] = useState(false);

  const add = useCallback((name, code) => {
    setItems(prev => {
      const i = prev.findIndex(x => x.name === name);
      if (i > -1) { const c = prev.slice(); c[i] = { ...c[i], qty: c[i].qty + 1 }; return c; }
      return [...prev, { name, code, qty: 1 }];
    });
    setOpen(true);
  }, []);

  const bump = useCallback((name, d) => {
    setItems(prev => prev.map(x => x.name === name ? { ...x, qty: Math.max(1, x.qty + d) } : x));
  }, []);

  const remove = useCallback(name => setItems(prev => prev.filter(x => x.name !== name)), []);
  const clear = useCallback(() => setItems([]), []);

  const count = useMemo(() => items.reduce((n, x) => n + x.qty, 0), [items]);

  return (
    <CartContext.Provider value={{ items, count, add, bump, remove, clear, open, setOpen }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be used inside <CartProvider>');
  return ctx;
}
