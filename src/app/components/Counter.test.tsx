import { expect, test } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import { Counter } from '@/app/components/Counter';

test('Counter', () => {
    render(<Counter />)
    expect(screen.getByRole('button', { name: 'plus' })).toBeDefined()
    fireEvent.click(screen.getByRole("button", {name: 'plus'}));
    expect(screen.getByRole('heading', {level: 2}).textContent).toEqual('1');

    fireEvent.click(screen.getByRole("button", {name: 'minus'}));
    expect(screen.getByRole('heading', {level: 2}).textContent).toEqual('0');
})