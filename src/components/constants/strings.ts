import { TaskStatus } from "@domain/model";

export const appStrings = {
  wishlist: {
    title: "Lista de desejos",
    sidebar: "Lista de desejos",
    modal: {
      title: "Nova categoria",
      label: {
        title: "Título",
        description: "Descrição",
      },
      placeholder: {
        title: "",
        description: "",
      },
    },
  },
  todo: { title: "To-do-list", sidebar: "To-do-list" },
  kanban: {
    columns: {
      [TaskStatus.ToDo]: "A fazer",
      [TaskStatus.InProgress]: "Em progresso",
      [TaskStatus.Completed]: "Completo",
    } satisfies Record<TaskStatus, string>,
    addColumn: "Nova coluna",
  },
  timeline: { title: "Linha do tempo", sidebar: "Linha do tempo" },
  card: { placeholder: "Digite o título...", assignes: "Adicionar dono", defaultTitle: "Untitled" },
  form: { validators: { required: "Campo obrigatório." } },
  button: {
    confirm: "Confirmar",
    cancel: "Cancelar",
  },
  defaultKanbanColumns: {
    [TaskStatus.ToDo]: "A fazer",
    [TaskStatus.InProgress]: "Em progresso",
    [TaskStatus.Completed]: "Completo",
  } satisfies Record<TaskStatus, string>,
};
