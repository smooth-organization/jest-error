import { render } from '@testing-library/react'
import App from './App'

describe("react test", () => {
	it("should work", () => {
		const { getByText } = render(<App />)
		expect(getByText('this is my app')).toBeTruthy()
	});
});
