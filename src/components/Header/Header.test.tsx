import {configure, shallow} from "enzyme";
import {Header} from "./Header";
import Adapter from '@cfaester/enzyme-adapter-react-18';

configure({adapter: new Adapter()})
const setUp = () => {
    const component = shallow(<Header/>)
    return component
}

describe("Should render Header component", () => {
    let wrapper: any
    beforeEach(() => {
        wrapper = setUp()
    })
    it("Should render without errors", () => {
        const header = wrapper.find(`[data-test="headerComponent"]`)
        expect(header.length).toBe(1)
    })

    it("Should has img", () => {
        const img = wrapper.find(`[data-test="img"]`)
        expect(img.length).toBe(1)
    })

    it("Should has logo", () => {
        const logo = wrapper.find(`[data-test="logo"]`)
        expect(logo.length).toBe(1)
    })
})