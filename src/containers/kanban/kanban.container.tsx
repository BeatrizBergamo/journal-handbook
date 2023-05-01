import { Card } from "@components/card";
import { Colors, strings } from "@components/constants";
import { Kanban, KanbanColumn } from "@components/kanban";

export const KanbanContainer = () => {
  return (
    <Kanban title={strings.wishlist.title}>
      <KanbanColumn label={strings.kanban.columns[0]}>
        <Card />
        <Card />
      </KanbanColumn>
      <KanbanColumn label={strings.kanban.columns[1]} color={Colors.BlueLight} />
      <KanbanColumn label={strings.kanban.columns[2]} color={Colors.Green} />
    </Kanban>
  );
};
