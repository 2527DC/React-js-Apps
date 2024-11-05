<?xml version="1.0" encoding="utf-8"?>
<LinearLayout
    xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:app="http://schemas.android.com/apk/res-auto"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    android:orientation="vertical"
    android:padding="16dp"
    android:background="@color/white">

    <!-- Profile Photo -->

    <!-- Button to Upload Image -->

    <de.hdodenhof.circleimageview.CircleImageView
        android:id="@+id/img_profile"
        android:layout_width="175dp"
        android:layout_height="175dp"
        android:layout_gravity="center"
        android:layout_marginTop="@dimen/_15sdp"
        android:layout_marginBottom="@dimen/_5sdp"
        android:src="@drawable/ic_dummy_user"
        app:civ_border_color="@color/colorPrimary"
        app:civ_border_width="@dimen/_2sdp" />

    <Button
        android:id="@+id/btn_upload_image"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:text="Upload Image"
        android:layout_gravity="center"
        android:layout_marginBottom="16dp" />

    <!-- Editable User Name -->
    <LinearLayout
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:orientation="horizontal"
        android:layout_marginTop="16dp"
        android:gravity="center_vertical">

        <TextView
            android:id="@+id/user_name_label"
            android:layout_width="wrap_content"
            android:layout_height="wrap_content"
            android:text="Name:"
            android:textSize="18sp"
            android:textStyle="bold"/>

        <TextView
            android:id="@+id/user_name_value"
            android:layout_width="0dp"
            android:layout_height="wrap_content"
            android:layout_weight="1"
            android:text="John Doe"
            android:textSize="16sp"
            android:layout_marginStart="8dp"/>

        <Button
            android:id="@+id/btn_edit_name"
            android:layout_width="wrap_content"
            android:layout_height="wrap_content"
            android:text="Edit"
            android:paddingHorizontal="10dp"
            android:textSize="14sp"
            android:layout_marginStart="8dp"/>
    </LinearLayout>

    <!-- Edit Name Card (Initially Hidden) -->
    <androidx.cardview.widget.CardView
        android:id="@+id/card_edit_name"
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:visibility="gone"
        android:layout_marginTop="16dp"
        android:layout_marginHorizontal="16dp"
        app:cardElevation="4dp"
        app:cardCornerRadius="8dp">

        <LinearLayout
            android:layout_width="match_parent"
            android:layout_height="wrap_content"
            android:orientation="vertical"
            android:padding="16dp">

            <EditText
                android:id="@+id/edit_text_name"
                android:layout_width="match_parent"
                android:layout_height="wrap_content"
                android:hint="Enter Name"
                android:inputType="textPersonName"
                android:textSize="16sp"/>

            <Button
                android:id="@+id/btn_submit_name"
                android:layout_width="wrap_content"
                android:layout_height="wrap_content"
                android:text="Submit"
                android:layout_gravity="end"
                android:layout_marginTop="8dp"/>
        </LinearLayout>
    </androidx.cardview.widget.CardView>

    <!-- Phone -->
    <TextView
        android:id="@+id/phone_label"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:text="Phone:"
        android:textSize="16sp"
        android:textStyle="bold"
        android:layout_marginTop="16dp"/>

    <TextView
        android:id="@+id/phone_value"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:text="+1234567890"
        android:textSize="16sp"
        android:layout_marginTop="4dp"/>

    <!-- Email -->
    <TextView
        android:id="@+id/email_label"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:text="Email:"
        android:textSize="16sp"
        android:textStyle="bold"
        android:layout_marginTop="16dp"/>

    <TextView
        android:id="@+id/email_value"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:text="john.doe@example.com"
        android:textSize="16sp"
        android:layout_marginTop="4dp"/>

    <!-- Gender -->
    <TextView
        android:id="@+id/gender_label"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:text="Gender:"
        android:textSize="16sp"
        android:textStyle="bold"
        android:layout_marginTop="16dp"/>

    <TextView
        android:id="@+id/gender_value"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:text="Male"
        android:textSize="16sp"
        android:layout_marginTop="4dp"/>

    <!-- Address -->
    <TextView
        android:id="@+id/address_label"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:text="Address:"
        android:textSize="16sp"
        android:textStyle="bold"
        android:layout_marginTop="16dp"/>

    <TextView
        android:id="@+id/address_value"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:text="1234 Main St, City, Country"
        android:textSize="16sp"
        android:layout_marginTop="4dp"/>
</LinearLayout>
/////////////////////////////////////////////

package com.mlt.ets.rider.fragments;

import androidx.lifecycle.LiveData;
import androidx.lifecycle.MutableLiveData;
import androidx.lifecycle.ViewModel;

public class ProfileViewModel extends ViewModel {

    // MutableLiveData for user profile information
    private final MutableLiveData<String> userName;
    private final MutableLiveData<String> phoneNumber;
    private final MutableLiveData<String> email;

    public ProfileViewModel() {
        userName = new MutableLiveData<>();
        phoneNumber = new MutableLiveData<>();
        email = new MutableLiveData<>();

        // Initialize with default values or fetch from a data source
        userName.setValue("John Doe");
        phoneNumber.setValue("+1234567890");
        email.setValue("john.doe@example.com");
    }

    // Getters for LiveData objects
    public LiveData<String> getUserName() {
        return userName;
    }

    public LiveData<String> getPhoneNumber() {
        return phoneNumber;
    }

    public LiveData<String> getEmail() {
        return email;
    }

    // Optionally, add setters to update the user data
    public void setUserName(String name) {
        userName.setValue(name);
    }

    public void setPhoneNumber(String phone) {
        phoneNumber.setValue(phone);
    }

    public void setEmail(String email) {
        this.email.setValue(email);
    }
}
/////////////////////////
//package com.mlt.ets.rider.fragments;
//
//import android.Manifest;
//import android.content.Context;
//import android.content.DialogInterface;
//import android.content.Intent;
//import android.content.pm.PackageManager;
//import android.icu.text.SimpleDateFormat;
//import android.net.Uri;
//import android.os.Bundle;
//import android.os.Environment;
//import android.provider.MediaStore;
//import android.view.LayoutInflater;
//import android.view.View;
//import android.view.ViewGroup;
//import android.view.inputmethod.InputMethodManager;
//import android.widget.Button;
//import android.widget.EditText;
//import android.widget.TextView;
//import android.widget.Toast;
//
//import androidx.annotation.NonNull;
//import androidx.activity.result.ActivityResultLauncher;
//import androidx.activity.result.contract.ActivityResultContracts;
//import androidx.appcompat.app.AlertDialog;
//import androidx.cardview.widget.CardView;
//import androidx.core.app.ActivityCompat;
//import androidx.core.content.FileProvider;
//import androidx.fragment.app.Fragment;
//import androidx.lifecycle.ViewModelProvider;
//
//import com.mlt.ets.rider.databinding.FragmentProfileBinding;
//
//import java.io.File;
//import java.io.IOException;
//import java.util.Date;
//
//public class ProfileFragment extends Fragment {
//
//    private FragmentProfileBinding binding;
//    private de.hdodenhof.circleimageview.CircleImageView imgProfile;
//    private TextView txtUserName;
//    private TextView txtPhoneValue;
//    private TextView txtEmailValue;
//    private TextView txtGenderValue;
//    private TextView txtAddressValue;
//    private CardView cardEditName;
//    private EditText editTextName;
//    private Button btnSubmitName;
//
//    private Uri imageUri;
//    private String currentPhotoPath;
//
//    private final ActivityResultLauncher<Intent> cameraLauncher =
//            registerForActivityResult(new ActivityResultContracts.StartActivityForResult(), result -> {
//                if (result.getResultCode() == getActivity().RESULT_OK) {
//                    imgProfile.setImageURI(imageUri);
//                }
//            });
//
//    private final ActivityResultLauncher<Intent> imagePickerLauncher =
//            registerForActivityResult(new ActivityResultContracts.StartActivityForResult(), result -> {
//                if (result.getResultCode() == getActivity().RESULT_OK && result.getData() != null) {
//                    Uri selectedImage = result.getData().getData();
//                    if (selectedImage != null) {
//                        imgProfile.setImageURI(selectedImage);
//                    }
//                }
//            });
//    @Override
//    public View onCreateView(@NonNull LayoutInflater inflater,
//                             ViewGroup container, Bundle savedInstanceState) {
//        ProfileViewModel profileViewModel =
//                new ViewModelProvider(this).get(ProfileViewModel.class);
//
//        binding = FragmentProfileBinding.inflate(inflater, container, false);
//        View root = binding.getRoot();
//
//        imgProfile = binding.imgProfile;
//        txtUserName = binding.userNameValue;
//        txtPhoneValue = binding.phoneValue;
//        txtEmailValue = binding.emailValue;
//        txtGenderValue = binding.genderValue;
//        txtAddressValue = binding.addressValue;
//        cardEditName = binding.cardEditName;
//        editTextName = binding.editTextName;
//        btnSubmitName = binding.btnSubmitName;
//
//        // Set up the Edit Button to show the CardView
//        Button btnEditName = binding.btnEditName;
//        btnEditName.setOnClickListener(v -> {
//            cardEditName.setVisibility(View.VISIBLE);
//            editTextName.setText(txtUserName.getText().toString());
//        });
//
//        // Set up the Submit Button to save the name and hide the CardView
//        btnSubmitName.setOnClickListener(v -> {
//            String newName = editTextName.getText().toString();
//            if (!newName.isEmpty()) {
//                txtUserName.setText(newName);
//                cardEditName.setVisibility(View.GONE);
//                hideKeyboard();
//                Toast.makeText(getActivity(), "Name updated", Toast.LENGTH_SHORT).show();
//            } else {
//                Toast.makeText(getActivity(), "Name cannot be empty", Toast.LENGTH_SHORT).show();
//            }
//        });
//
//        return root;
//    }
//    private void hideKeyboard() {
//        InputMethodManager imm = (InputMethodManager) getActivity().getSystemService(Context.INPUT_METHOD_SERVICE);
//        imm.hideSoftInputFromWindow(editTextName.getWindowToken(), 0);
//    }
//    private void showImageSourceDialog() {
//        String[] options = {"Camera", "Gallery"};
//        AlertDialog.Builder builder = new AlertDialog.Builder(getActivity());
//        builder.setTitle("Select Image Source")
//                .setItems(options, new DialogInterface.OnClickListener() {
//                    @Override
//                    public void onClick(DialogInterface dialog, int which) {
//                        if (which == 0) {
//                            // Check for camera permission
//                            if (ActivityCompat.checkSelfPermission(getActivity(), Manifest.permission.CAMERA) != PackageManager.PERMISSION_GRANTED) {
//                                requestCameraPermission();
//                            } else {
//                                takePicture();
//                            }
//                        } else if (which == 1) {
//                            // Check for read external storage permission
//                            if (ActivityCompat.checkSelfPermission(getActivity(), Manifest.permission.READ_EXTERNAL_STORAGE) != PackageManager.PERMISSION_GRANTED) {
//                                requestStoragePermission();
//                            } else {
//                                pickImageFromGallery();
//                            }
//                        }
//                    }
//                });
//        builder.show();
//    }
//
//    private void requestCameraPermission() {
//        requestPermissions(new String[]{Manifest.permission.CAMERA}, 100);
//    }
//
//    private void requestStoragePermission() {
//        requestPermissions(new String[]{Manifest.permission.READ_EXTERNAL_STORAGE}, 101);
//    }
//
//    @Override
//    public void onRequestPermissionsResult(int requestCode, @NonNull String[] permissions, @NonNull int[] grantResults) {
//        super.onRequestPermissionsResult(requestCode, permissions, grantResults);
//        if (requestCode == 100) {
//            if (grantResults.length > 0 && grantResults[0] == PackageManager.PERMISSION_GRANTED) {
//                takePicture();
//            } else {
//                Toast.makeText(getActivity(), "Camera permission is required to take pictures", Toast.LENGTH_SHORT).show();
//            }
//        } else if (requestCode == 101) {
//            if (grantResults.length > 0 && grantResults[0] == PackageManager.PERMISSION_GRANTED) {
//                pickImageFromGallery();
//            } else {
//                Toast.makeText(getActivity(), "Storage permission is required to pick images", Toast.LENGTH_SHORT).show();
//            }
//        }
//    }
//
//    private void takePicture() {
//        Intent takePictureIntent = new Intent(MediaStore.ACTION_IMAGE_CAPTURE);
//        if (takePictureIntent.resolveActivity(getActivity().getPackageManager()) != null) {
//            try {
//                File photoFile = createImageFile();
//                imageUri = FileProvider.getUriForFile(getActivity(),
//                        getActivity().getPackageName() + ".fileprovider", photoFile);
//                takePictureIntent.putExtra(MediaStore.EXTRA_OUTPUT, imageUri);
//                cameraLauncher.launch(takePictureIntent);
//            } catch (IOException e) {
//                Toast.makeText(getActivity(), "Error creating image file: " + e.getMessage(), Toast.LENGTH_SHORT).show();
//            }
//        }
//    }
//
//    private File createImageFile() throws IOException {
//        String timeStamp = new SimpleDateFormat("yyyyMMdd_HHmmss").format(new Date());
//        String imageFileName = "JPEG_" + timeStamp + "_";
//        File storageDir = getActivity().getExternalFilesDir(Environment.DIRECTORY_PICTURES);
//        File image = File.createTempFile(imageFileName, ".jpg", storageDir);
//        currentPhotoPath = image.getAbsolutePath();
//        return image;
//    }
//
//    private void pickImageFromGallery() {
//        Intent intent = new Intent(Intent.ACTION_PICK, MediaStore.Images.Media.EXTERNAL_CONTENT_URI);
//        imagePickerLauncher.launch(intent);
//    }
//
//    @Override
//    public void onDestroyView() {
//        super.onDestroyView();
//        binding = null;
//    }
//}
package com.mlt.ets.rider.fragments;

import android.Manifest;
import android.content.Context;
import android.content.DialogInterface;
import android.content.Intent;
import android.content.pm.PackageManager;
import android.icu.text.SimpleDateFormat;
import android.net.Uri;
import android.os.Bundle;
import android.os.Environment;
import android.provider.MediaStore;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.view.inputmethod.InputMethodManager;
import android.widget.Button;
import android.widget.EditText;
import android.widget.TextView;
import android.widget.Toast;

import androidx.annotation.NonNull;
import androidx.activity.result.ActivityResultLauncher;
import androidx.activity.result.contract.ActivityResultContracts;
import androidx.appcompat.app.AlertDialog;
import androidx.cardview.widget.CardView;
import androidx.core.content.ContextCompat;
import androidx.core.content.FileProvider;
import androidx.fragment.app.Fragment;
import androidx.lifecycle.ViewModelProvider;

import com.mlt.ets.rider.databinding.FragmentProfileBinding;

import java.io.File;
import java.io.IOException;
import java.util.Date;

public class ProfileFragment extends Fragment {

    private FragmentProfileBinding binding;
    private de.hdodenhof.circleimageview.CircleImageView imgProfile;
    private TextView txtUserName;
    private TextView txtPhoneValue;
    private TextView txtEmailValue;
    private TextView txtGenderValue;
    private TextView txtAddressValue;
    private CardView cardEditName;
    private EditText editTextName;
    private Button btnSubmitName;

    private Uri imageUri;
    private String currentPhotoPath;

    // Define the launcher for camera permission
    private final ActivityResultLauncher<String> cameraPermissionLauncher =
            registerForActivityResult(new ActivityResultContracts.RequestPermission(), isGranted -> {
                if (isGranted) {
                    takePicture();
                } else {
                    Toast.makeText(getActivity(), "Camera permission is required to take pictures", Toast.LENGTH_SHORT).show();
                }
            });

    // Define the launcher for storage permission
    private final ActivityResultLauncher<String> storagePermissionLauncher =
            registerForActivityResult(new ActivityResultContracts.RequestPermission(), isGranted -> {
                if (isGranted) {
                    pickImageFromGallery();
                } else {
                    Toast.makeText(getActivity(), "Storage permission is required to pick images", Toast.LENGTH_SHORT).show();
                }
            });

    private final ActivityResultLauncher<Intent> cameraLauncher =
            registerForActivityResult(new ActivityResultContracts.StartActivityForResult(), result -> {
                if (result.getResultCode() == getActivity().RESULT_OK) {
                    imgProfile.setImageURI(imageUri);
                }
            });

    private final ActivityResultLauncher<Intent> imagePickerLauncher =
            registerForActivityResult(new ActivityResultContracts.StartActivityForResult(), result -> {
                if (result.getResultCode() == getActivity().RESULT_OK && result.getData() != null) {
                    Uri selectedImage = result.getData().getData();
                    if (selectedImage != null) {
                        imgProfile.setImageURI(selectedImage);
                    }
                }
            });

    @Override
    public View onCreateView(@NonNull LayoutInflater inflater, ViewGroup container, Bundle savedInstanceState) {
        ProfileViewModel profileViewModel = new ViewModelProvider(this).get(ProfileViewModel.class);

        binding = FragmentProfileBinding.inflate(inflater, container, false);
        View root = binding.getRoot();

        imgProfile = binding.imgProfile;
        txtUserName = binding.userNameValue;
        txtPhoneValue = binding.phoneValue;
        txtEmailValue = binding.emailValue;
        txtGenderValue = binding.genderValue;
        txtAddressValue = binding.addressValue;
        cardEditName = binding.cardEditName;
        editTextName = binding.editTextName;
        btnSubmitName = binding.btnSubmitName;

        Button btnEditName = binding.btnEditName;
        btnEditName.setOnClickListener(v -> {
            cardEditName.setVisibility(View.VISIBLE);
            editTextName.setText(txtUserName.getText().toString());
        });

        btnSubmitName.setOnClickListener(v -> {
            String newName = editTextName.getText().toString();
            if (!newName.isEmpty()) {
                txtUserName.setText(newName);
                cardEditName.setVisibility(View.GONE);
                hideKeyboard();
                Toast.makeText(getActivity(), "Name updated", Toast.LENGTH_SHORT).show();
            } else {
                Toast.makeText(getActivity(), "Name cannot be empty", Toast.LENGTH_SHORT).show();
            }
        });

        binding.btnUploadImage.setOnClickListener(v -> showImageSourceDialog());

        return root;
    }

    private void hideKeyboard() {
        InputMethodManager imm = (InputMethodManager) getActivity().getSystemService(Context.INPUT_METHOD_SERVICE);
        imm.hideSoftInputFromWindow(editTextName.getWindowToken(), 0);
    }

    private void showImageSourceDialog() {
        String[] options = {"Camera", "Gallery"};
        AlertDialog.Builder builder = new AlertDialog.Builder(getActivity());
        builder.setTitle("Select Image Source")
                .setItems(options, (dialog, which) -> {
                    if (which == 0) {
                        // Camera option
                        if (ContextCompat.checkSelfPermission(getActivity(), Manifest.permission.CAMERA) != PackageManager.PERMISSION_GRANTED) {
                            cameraPermissionLauncher.launch(Manifest.permission.CAMERA);
                        } else {
                            takePicture();
                        }
                    } else if (which == 1) {
                        // Gallery option
                        if (ContextCompat.checkSelfPermission(getActivity(), Manifest.permission.READ_EXTERNAL_STORAGE) != PackageManager.PERMISSION_GRANTED) {
                            storagePermissionLauncher.launch(Manifest.permission.READ_EXTERNAL_STORAGE);
                        } else {
                            pickImageFromGallery();
                        }
                    }
                });
        builder.show();
    }

    private void pickImageFromGallery() {
        Intent intent = new Intent(Intent.ACTION_PICK, MediaStore.Images.Media.EXTERNAL_CONTENT_URI);
        intent.setType("image/*"); // Optional, to filter to only images
        imagePickerLauncher.launch(intent);
    }
    
    private void takePicture() {
        Intent takePictureIntent = new Intent(MediaStore.ACTION_IMAGE_CAPTURE);
        if (takePictureIntent.resolveActivity(getActivity().getPackageManager()) != null) {
            try {
                File photoFile = createImageFile();
                imageUri = FileProvider.getUriForFile(getActivity(),
                        getActivity().getPackageName() + ".fileprovider", photoFile);
                takePictureIntent.putExtra(MediaStore.EXTRA_OUTPUT, imageUri);
                cameraLauncher.launch(takePictureIntent);
            } catch (IOException e) {
                Toast.makeText(getActivity(), "Error creating image file: " + e.getMessage(), Toast.LENGTH_SHORT).show();
            }
        }
    }

    private File createImageFile() throws IOException {
        String timeStamp = new SimpleDateFormat("yyyyMMdd_HHmmss").format(new Date());
        String imageFileName = "JPEG_" + timeStamp + "_";
        File storageDir = getActivity().getExternalFilesDir(Environment.DIRECTORY_PICTURES);
        File image = File.createTempFile(imageFileName, ".jpg", storageDir);
        currentPhotoPath = image.getAbsolutePath();
        return image;
    }



    @Override
    public void onDestroyView() {
        super.onDestroyView();
        binding = null;
    }
}
///////////////////////////////////////


<?xml version="1.0" encoding="utf-8"?>
<manifest xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:tools="http://schemas.android.com/tools">

    <!-- Optional: Feature declaration for camera -->
    <uses-feature
        android:name="android.hardware.camera"
        android:required="false" />

    <!-- Permissions required for the application -->
    <uses-permission android:name="android.permission.INTERNET" />
    <uses-permission android:name="android.permission.ACCESS_NETWORK_STATE" />
    <uses-permission android:name="android.permission.ACCESS_FINE_LOCATION" />
    <uses-permission android:name="android.permission.ACCESS_COARSE_LOCATION" />
    <uses-permission android:name="android.permission.CAMERA" />
    <uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE" />
    <uses-permission android:name="android.permission.READ_EXTERNAL_STORAGE" />

    <application
        android:allowBackup="true"
        android:dataExtractionRules="@xml/data_extraction_rules"
        android:fullBackupContent="@xml/backup_rules"
        android:icon="@mipmap/ic_launcher"
        android:label="@string/app_name"
        android:roundIcon="@mipmap/ic_launcher_round"
        android:supportsRtl="true"
        android:theme="@style/Theme.RIDER"
        android:networkSecurityConfig="@xml/network_security_config"
        tools:targetApi="31">

        <meta-data
            android:name="com.google.android.geo.API_KEY"
            android:value="AIzaSyCI7CwlYJ6Qt5pQGW--inSsJmdEManW-K0" /> <!-- Replace with your actual API key -->

        <activity
            android:name=".activity.LoginActivity"
            android:exported="true">
            <intent-filter>
                <action android:name="android.intent.action.MAIN" />
                <category android:name="android.intent.category.LAUNCHER" />
            </intent-filter>
        </activity>

        <activity android:name=".activity.SignUpActivity" />
        <activity android:name=".activity.ProfileActivity" />
        <activity android:name=".MainActivity" />

        <!-- FileProvider setup for sharing files -->
        <provider
            android:name="androidx.core.content.FileProvider"
            android:authorities="${applicationId}.fileprovider"
            android:exported="false"
            android:grantUriPermissions="true">
            <meta-data
                android:name="android.support.FILE_PROVIDER_PATHS"
                android:resource="@xml/file_paths" />
        </provider>

    </application>

</manifest>
/////

<?xml version="1.0" encoding="utf-8"?>
<paths xmlns:android="http://schemas.android.com/apk/res/android">
    <external-files-path
        name="my_images"
        path="." /> <!-- This allows access to all files in the external files directory -->
</paths>
