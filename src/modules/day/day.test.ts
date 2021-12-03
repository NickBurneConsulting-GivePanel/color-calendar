import Calendar from "../../index";
import { resetDOM } from "../../testHelper";

beforeEach(() => {
    resetDOM()
})

test('calls custom render correctly', () => {
    const mockRender = jest.fn()
    // two full months
    const expectedCalls = 62
    const calendar = new Calendar({
        customDayRender: mockRender
    })

    calendar.renderDays()
    expect(mockRender).toBeCalledTimes(expectedCalls)
})