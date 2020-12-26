const BOARD_SAVE = 'SAVE'; 
const BOARD_REMOVE = 'REMOVE'; 
const BOARD_READ = 'ONE'; 
const BOARD_LIST = 'LIST'; 

export const board_save = (data) => ({ 
    type: BOARD_SAVE, data 
}); 

export const board_remove = (id) => ({ 
    type: BOARD_REMOVE, id: id 
}); 

export const board_read = (id) => ({ 
    type: BOARD_READ, id: id 
}); 

export const board_list = () => ({ 
    type: BOARD_LIST 
}); 

const initialState = { 
    maxNo: 3, 
    boards: [
        {
            id: 0,
            title: "Title-Title-Title-Title",
            date: "| 2020년 09월 1일",
            category: "카테고리, 카테고리, 카테고리, 카테고리",
            writer: "작성자 |",
            views: "조회수",
            content: ", or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is"
        },
        {
            id: 1,
            title: "Title-Title-Title-Title",
            date: "| 2020년 09월 2일",
            category: "카테고리, 카테고리, 카테고리, 카테고리",
            writer: "작성자 |",
            views: "조회수",
            content: ", or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is"
        },
        {
            id: 2,
            title: "Title-Title-Title-Title",
            date: "| 2020년 09월 3일",
            category: "카테고리, 카테고리, 카테고리, 카테고리",
            writer: "작성자 |",
            views: "조회수",
            content: ", or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is"
        }
    ],
    selectedBoard: {} 
}; 

export default function board_reducer(state = initialState, action) { 
    let boards = state.boards; 
    
    switch(action.type) { 
        case BOARD_SAVE: 
            let data = action.data; 
            let maxNo = state.maxNo; 
            
            if (!data.brdno) { // new : Insert 
                return {
                    maxNo: maxNo+1, 
                    boards: boards.concat({
                        ...data, 
                        id: maxNo, 
                        date: new Date()
                    }), 
                    selectedBoard: {} 
                }; 
            } 
            
            return {
                ...state, 
                boards: boards.map(row => 
                    data.id === row.id ? { ...data } : row
                ), 
                selectedBoard: {} 
            }; 
        
            case BOARD_REMOVE: 
                return {
                    ...state, 
                    boards: boards.filter(row => 
                        row.id !== action.id
                    ), 
                    selectedBoard: {}
                }; 
            case BOARD_READ: 
                return { 
                    ...state, 
                    selectedBoard: boards.find(row => 
                        row.id === action.id
                    ) 
                }; 
            default: 
                return state; 
    } 
}