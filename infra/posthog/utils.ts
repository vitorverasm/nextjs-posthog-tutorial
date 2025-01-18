import posthog from "posthog-js";

const captureClientSideEvent: typeof posthog.capture = (
    eventName,
    properties,
    options,
) => {
    console.log("captureClientSideEvent", eventName, properties, options);
    return posthog.capture(eventName, properties, options);
};

export { captureClientSideEvent };
