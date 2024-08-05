import { useDrop } from "react-dnd";
import { ColumnType, ItemType } from "../utils/enums";
import { DragItem, TaskModel } from "../utils/models";

function useColumnDrop(
    column: ColumnType,
    handleDrop: (fromColumn: ColumnType, taskId: TaskModel['id']) => void,
) {
    const [{ isOver }, dropRef] = useDrop<DragItem, void, { isOver: boolean }>({
        accept: ItemType.TASK,
        drop: (dragItem) => {
            if (!dragItem || dragItem.from === column) {
                return;
            }
            // Prevent moving from Blocked or Completed to Todo or In Progress
            if (
                (dragItem.from === ColumnType.BLOCKED || dragItem.from === ColumnType.COMPLETED) &&
                (column === ColumnType.TO_DO || column === ColumnType.IN_PROGRESS)
            ) {
                return;
            }
            handleDrop(dragItem.from, dragItem.id);
        },
        collect: (monitor) => ({
            isOver: monitor.isOver(),
        }),
    });

    return {
        isOver,
        dropRef,
    };
}

export default useColumnDrop;
