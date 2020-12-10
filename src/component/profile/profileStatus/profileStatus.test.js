import React from "react";
import {create} from "react-test-renderer";
import ProfileStatus from "./profileStatus";

const component = create(<ProfileStatus status="default status"/>);
const root = component.root;
const span = root.findByType('span');

describe("ProfileStatus component", () => {
    test("status from props should be in the state", () => {
        const instance = component.getInstance();
        expect(instance.state.status).toBe("default status");
    });
    test("after creation span with status should be displayed", () => {
        expect(span).not.toBeNull();
    });
    test("after creation input with status should not be displayed", () => {
        expect(() => {
            const input = root.findByType('input');
        }).toThrow();
    });
    test("after creation span should contains correct status", () => {
        expect(span.children[0]).toBe("default status");
    });
    test("input should be displayed in edit mode instead of span", () => {
        span.props.onDoubleClick();
        const input = root.findByType('input');
        expect(input).not.toBeNull();
        expect(input.props.value).toBe("default status");
    });
});