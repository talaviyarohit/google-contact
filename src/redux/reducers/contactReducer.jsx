const initialState = {
    contacts: [],
    loading: false,
    error: null,
};

 const contactReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_CONTACTS':
            return { ...state, contacts: action.payload };
        case 'ADD_CONTACT':
            return { ...state, contacts: [...state.contacts, action.payload] };
        case 'UPDATE_CONTACT':
            return {
                ...state,
                contacts: state.contacts.map(contact =>
                    contact.id === action.payload.id ? action.payload : contact
                ),
            };
        case 'DELETE_CONTACT':
            return {
                ...state,
                contacts: state.contacts.filter(contact => contact.id !== action.payload),
            };

        case 'FETCH_CONTACTS_REQUEST':
            return { ...state, loading: true, error: null };
        case 'FETCH_CONTACTS_SUCCESS':
            return { ...state, contacts: action.payload, loading: false };
        case 'FETCH_CONTACTS_FAILURE':
            return { ...state, loading: false, error: action.payload };
        case 'ADD_CONTACT_REQUEST':
            return { ...state, loading: true, error: null };
        case 'ADD_CONTACT_SUCCESS':
            return { ...state, contacts: [...state.contacts, action.payload], loading: false };
        case 'ADD_CONTACT_FAILURE':
            return { ...state, loading: false, error: action.payload };
        case 'UPDATE_CONTACT_REQUEST':
            return { ...state, loading: true, error: null };
        case 'UPDATE_CONTACT_SUCCESS':
            return {
                ...state,
                contacts: state.contacts.map(contact =>
                    contact.id === action.payload.id ? action.payload : contact
                ),
                loading: false,
            };
        case 'UPDATE_CONTACT_FAILURE':
            return { ...state, loading: false, error: action.payload };
        case 'DELETE_CONTACT_REQUEST':
            return { ...state, loading: true, error: null };
        case 'DELETE_CONTACT_SUCCESS':
            return {
                ...state,
                contacts: state.contacts.filter(contact => contact.id !== action.payload),
                loading: false,
            };
        case 'DELETE_CONTACT_FAILURE':
            return { ...state, loading: false, error: action.payload };
        default:
            return state;
    }


};

export default contactReducer;





