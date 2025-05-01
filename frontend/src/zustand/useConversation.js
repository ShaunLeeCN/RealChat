import { create } from "zustand";

const useConversation = create((set) => ({
	selectedConversation: null,//存储&更新当前选中的会话对象
	setSelectedConversation: (selectedConversation) => set({ selectedConversation }),
	messages: [],//存储&更新当前会话的消息列表
	setMessages: (messages) => set({ messages }),
}));

export default useConversation;
