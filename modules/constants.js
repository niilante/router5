export const errorCodes = {
    ROUTER_NOT_STARTED     : 'NOT_STARTED',
    NO_START_PATH_OR_STATE : 'NO_START_PATH_OR_STATE',
    ROUTER_ALREADY_STARTED : 'ALREADY_STARTED',
    ROUTE_NOT_FOUND        : 'ROUTE_NOT_FOUND',
    SAME_STATES            : 'SAME_STATES',
    CANNOT_DEACTIVATE      : 'CANNOT_DEACTIVATE',
    CANNOT_ACTIVATE        : 'CANNOT_ACTIVATE',
    TRANSITION_ERR         : 'TRANSITION_ERR',
    TRANSITION_CANCELLED   : 'CANCELLED'
};

const constants = {
    UNKNOWN_ROUTE: '@@router5/UNKNOWN_ROUTE',
    ROUTER_START: '$start',
    ROUTER_STOP: '$stop',
    TRANSITION_START: '$$start',
    TRANSITION_CANCEL: '$$cancel',
    TRANSITION_SUCCESS: '$$success',
    TRANSITION_ERROR: '$$error'
};

export default constants;
