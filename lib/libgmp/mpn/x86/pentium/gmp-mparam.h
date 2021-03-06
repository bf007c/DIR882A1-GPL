/* Intel P54 gmp-mparam.h -- Compiler/machine parameter header file.

Copyright 1991, 1993, 1994, 1999, 2000, 2001, 2002, 2004 Free Software
Foundation, Inc.

This file is part of the GNU MP Library.

The GNU MP Library is free software; you can redistribute it and/or modify
it under the terms of the GNU Lesser General Public License as published by
the Free Software Foundation; either version 3 of the License, or (at your
option) any later version.

The GNU MP Library is distributed in the hope that it will be useful, but
WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY
or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU Lesser General Public
License for more details.

You should have received a copy of the GNU Lesser General Public License
along with the GNU MP Library.  If not, see http://www.gnu.org/licenses/.  */


#define BITS_PER_MP_LIMB 32
#define BYTES_PER_MP_LIMB 4


/* For mpn/x86/pentium/mod_1.asm */
#define COUNT_LEADING_ZEROS_NEED_CLZ_TAB


/* 166MHz P54 */

/* Generated by tuneup.c, 2004-02-10, gcc 2.95 */

#define MUL_KARATSUBA_THRESHOLD          16
#define MUL_TOOM3_THRESHOLD              90

#define SQR_BASECASE_THRESHOLD            0  /* always */
#define SQR_KARATSUBA_THRESHOLD          22
#define SQR_TOOM3_THRESHOLD             122

#define DIV_SB_PREINV_THRESHOLD       MP_SIZE_T_MAX  /* never */
#define DIV_DC_THRESHOLD                 52
#define POWM_THRESHOLD                   77

#define GCD_ACCEL_THRESHOLD               3
#define GCDEXT_THRESHOLD                 13
#define JACOBI_BASE_METHOD                2

#define USE_PREINV_DIVREM_1               0
#define USE_PREINV_MOD_1                  1  /* native */
#define DIVREM_2_THRESHOLD            MP_SIZE_T_MAX  /* never */
#define DIVEXACT_1_THRESHOLD              0  /* always (native) */
#define MODEXACT_1_ODD_THRESHOLD          0  /* always (native) */

#define GET_STR_DC_THRESHOLD             23
#define GET_STR_PRECOMPUTE_THRESHOLD     33
#define SET_STR_THRESHOLD              2788

#define MUL_FFT_TABLE  { 432, 928, 1664, 3584, 10240, 40960, 0 }
#define MUL_FFT_MODF_THRESHOLD          448
#define MUL_FFT_THRESHOLD              3328

#define SQR_FFT_TABLE  { 496, 928, 1920, 4608, 10240, 40960, 0 }
#define SQR_FFT_MODF_THRESHOLD          512
#define SQR_FFT_THRESHOLD              3328
