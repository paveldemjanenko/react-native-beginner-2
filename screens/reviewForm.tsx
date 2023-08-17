import React from 'react';
import { TextInput, Text, View } from 'react-native';
import { globalStyles } from '../styles/global';
import { Formik } from 'formik';
import FlatButton from '../shared/button';
import * as yup from 'yup';

const reviewSchema = yup.object({
    title: yup.string().required().min(4),
    body: yup.string().required().min(8),
    rating: yup
        .string()
        .required()
        .test('is-num-1-5', 'Rating must be a number 1 - 5', val => {
            return parseInt(val) < 6 && parseInt(val) > 0;
        }),
});

export default function ReviewForm({ addReview }: any): JSX.Element {
    return (
        <View style={globalStyles.container}>
            <Formik
                initialValues={{ title: '', body: '', rating: '' }}
                validationSchema={reviewSchema}
                onSubmit={(values, actions) => {
                    addReview(values);
                    actions.resetForm();
                }}>
                {formik => (
                    <View>
                        <TextInput
                            style={globalStyles.input}
                            placeholder="Review title"
                            onChangeText={formik.handleChange('title')}
                            value={formik.values.title}
                            onBlur={formik.handleBlur('title')}
                        />
                        <Text style={globalStyles.errorText}>
                            {formik.touched.title && formik.errors.title}
                        </Text>
                        <TextInput
                            multiline
                            minHeight={60}
                            style={globalStyles.input}
                            placeholder="Review details"
                            onChangeText={formik.handleChange('body')}
                            value={formik.values.body}
                            onBlur={formik.handleBlur('body')}
                        />
                        <Text style={globalStyles.errorText}>
                            {formik.touched.body && formik.errors.body}
                        </Text>
                        <TextInput
                            style={globalStyles.input}
                            placeholder="Rating (1-5)"
                            onChangeText={formik.handleChange('rating')}
                            value={formik.values.rating}
                            keyboardType="numeric"
                            onBlur={formik.handleBlur('rating')}
                        />
                        <Text style={globalStyles.errorText}>
                            {formik.touched.rating && formik.errors.rating}
                        </Text>
                        <FlatButton
                            text="submit"
                            onPress={(values: any) =>
                                formik.handleSubmit(values)
                            }
                        />
                    </View>
                )}
            </Formik>
        </View>
    );
}
