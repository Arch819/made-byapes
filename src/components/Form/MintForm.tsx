import React, { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import { object, string } from 'yup';
import sprite from '../../img/sprite.svg';
import {
  ErrorFieldTextStyle,
  FieldStyle,
  MintFormLabelStyle,
  MintFormStyle,
  MintFormSubmitBtnStyle,
} from './MintForm.styled';
import CustomizedSnackbars from '../SnackBar';

const validationSchema = object().shape({
  username: string().required().min(3),
  walletAddress: string().required().min(3),
});

const initialValues = {
  username: '',
  walletAddress: '',
};

export interface IMintFormProps {}

export default function MintForm(props: IMintFormProps) {
  const [submitBtnText, setSubmitBtnText] = useState<string>('Mint');
  const [isSuccess, setIsSuccess] = useState(false);
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values, { resetForm }) => {
      setSubmitBtnText('MINTED');
      setIsSuccess(true);
      resetForm();
    },
  });

  function handleBtnText() {
    let btnText = submitBtnText;
    const isUserName = formik.values.username;
    const isWalletAddress = formik.values.walletAddress;
    const { username, walletAddress } = formik.errors;
    const userNameTouched = Boolean(formik.touched.username);
    const walletAddressTouched = Boolean(formik.touched.walletAddress);
    if (isUserName || isWalletAddress) {
      btnText = 'mint';
    }
    if (
      (username && userNameTouched) ||
      (walletAddress && walletAddressTouched)
    ) {
      btnText = 'error';
    }

    return btnText;
  }

  const handleCloseSnackBars = () => {
    setIsSuccess(false);
  };

  return (
    <>
      <MintFormStyle onSubmit={formik.handleSubmit} autoComplete="off">
        <MintFormLabelStyle>
          <span className="icon">
            <svg width={24} height={24} fill="#5A65F2">
              <use href={`${sprite}#icon-discord`}></use>
            </svg>
          </span>
          <FieldStyle
            type="text"
            name="username"
            className="field"
            value={formik.values?.username}
            $error={
              Boolean(formik.touched.username) &&
              Boolean(formik.errors.username)
            }
            onChange={formik.handleChange}
            placeholder="@username"
            onBlur={formik.handleBlur}
            required
          />
          {formik.errors.username && formik.touched.username && (
            <ErrorFieldTextStyle>{formik.errors.username}</ErrorFieldTextStyle>
          )}
        </MintFormLabelStyle>
        <MintFormLabelStyle>
          <span className="icon">
            <svg width={24} height={24}>
              <use href={`${sprite}#icon-meta-mask`}></use>
            </svg>
          </span>
          <FieldStyle
            type="text"
            name="walletAddress"
            className="field"
            value={formik.values?.walletAddress}
            $error={
              Boolean(formik.errors.walletAddress) &&
              Boolean(formik.touched.walletAddress)
            }
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="Wallet address"
            required
          />
          {formik.errors.walletAddress && formik.touched.walletAddress && (
            <ErrorFieldTextStyle>
              {formik.errors.walletAddress}
            </ErrorFieldTextStyle>
          )}
        </MintFormLabelStyle>
        <MintFormSubmitBtnStyle type="submit">
          {handleBtnText()}
        </MintFormSubmitBtnStyle>
      </MintFormStyle>
      <CustomizedSnackbars isOpen={isSuccess} onClose={handleCloseSnackBars} />
    </>
  );
}
