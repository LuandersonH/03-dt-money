import { HeaderContainer, HeaderContent, NewTransactionButton } from "./styles";
import logoImg from "../../assets/logo.svg";
import * as Dialog from "@radix-ui/react-dialog";
import { NewTransactionModal } from "../NewTransactionsModal";

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logoImg} alt="" />

        <Dialog.Root>
          {/* asChild faz com que o Dialog Trigger não crie um novo botão, mas sim, use o NewTransactionButton em seu lugar.*/}
          <Dialog.Trigger asChild>
            <NewTransactionButton>Nova Transação</NewTransactionButton>
          </Dialog.Trigger>
          <NewTransactionModal />
        </Dialog.Root>
      </HeaderContent>
    </HeaderContainer>
  );
}
