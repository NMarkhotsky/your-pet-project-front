import { toast } from 'react-toastify';

export const errorMessage = (message) => {
    toast.error(message)
}

export const successMessage = (message) => {
    toast.success(message)
}