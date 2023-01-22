import Enzyme, {EnzymeAdapter} from "enzyme";

Enzyme.configure({
    adapter: new EnzymeAdapter(),
    disableLifecycleMethods: true
})