import { HeaderContainer, HeaderContent, NewTransactionButton } from "./styles";
import logoImg from "../../assets/logo.svg";
import * as Dialog from "@radix-ui/react-dialog";

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
          <Dialog.Portal>
              <Dialog.Overlay/>
              <Dialog.Content>
                  <Dialog.Title>Nova transação</Dialog.Title>

                  
                  <Dialog.Close/>
              </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
      </HeaderContent>
    </HeaderContainer>
  );
}
